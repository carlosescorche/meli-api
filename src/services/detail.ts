import axios from 'axios'
import dotenv from 'dotenv'
import { newExtendedItem, getAutorSignature } from './utils'

dotenv.config()
const { MELI_BASE_URL = '' } = process.env

// getItemDetail devuelve la información de un producto según el id dado.
export async function getItemDetail(id: string): Promise<DetailResponse> {
  // Se consulta el producto a Mercado libre con el id obtenido.
  const resp = await axios.get<MeliDetailResponse>(`${MELI_BASE_URL}/items/${id}`)

  if (resp.status === 200) {
    // Se transforma la información del producto a la representación interna. 
    const item = newExtendedItem(resp.data)
    const categoryId = resp.data.category_id

    // Se consulta a Mercado libre la descripción del producto.
    const description = await axios.get<MeliDescriptionResponse>(`${MELI_BASE_URL}/items/${id}/description`)
    if (description.status === 200) {
      item.description = description.data.plain_text

      // Se consulta por las categorias predecesoras del producto y así devolverlas como `breadcrumbs`
      const category = await axios.get<MeliCategoryResponse>(`${MELI_BASE_URL}/categories/${categoryId}`)
      if (category.status === 200) {
        item.breadcrumbs = category.data.path_from_root.map(i => i.name)

        return {
          autor: getAutorSignature(),
          item
        }
      }
    }
  }

  throw new Error('External service error')
}

export default getItemDetail
