import axios from 'axios'
import dotenv from 'dotenv'
import { ParsedQs } from 'qs'
import { newItem, getAutorSignature } from './utils'

dotenv.config()
const { MELI_BASE_URL = '' } = process.env

// searchItems devuelve un listado de productos segun los parametros de consulta recibidos.
export async function searchItems(query: ParsedQs): Promise<SearchResponse> {
  // Se realiza busqueda en Mercado libre traspasando los parametros de consulta
  const resp = await axios.get<MeliSearchResponse>(`${MELI_BASE_URL}/sites/MLA/search`, { params: query })

  if (resp.status === 200) {
    // Se transforma información recibida del producto a la representación interna. 
    const items = resp.data.results.map(newItem)
    // Se obtienen categorias relacionadas a los filtros de busqueda.
    const filter = resp.data.available_filters.find(f => f.id === 'category')
    // Se ordenan las categorias segun resultado de busqueda.
    const sorted = filter?.values.sort((a, b) => b.results - a.results)
    const categories = sorted?.map(c => c.name) ?? []

    return {
      autor: getAutorSignature(),
      categories,
      items
    }
  }

  throw new Error('External service error')
}

export default searchItems
