// Autor representa la firma del autor en las 
// respuestas del servicio.
interface Autor {
  name: string
  lastname: string
}

// Price representa el precio de un producto.
interface Price {
  currency: string
  amount: number
  decimals: number
}

// Item representa la interfaz de un producto.
interface Item {
  id: string
  title: string
  price: Price
  picture: string
  condition: string
  free_shipping: boolean
}

// ExtendedItem representa un producto con 
// información extra.
interface ExtendedItem extends Item {
  sold_quantity: string
  description: string
  breadcrumbs: string[]
}

// SearchResponse representa la respuesta de una busqueda.
interface SearchResponse {
  autor: Autor
  categories: string[]
  items: Item[]
}

// DetailResponse representa la consulta de un producto.
interface DetailResponse {
  autor: Autor
  item: ExtendedItem
}

// MeliItem representa un producto obtenido desde 
// Mercado libre.
interface MeliItem {
  id: string
  title: string
  condition: string
  currency_id: string
  price: number
  sold_quantity: string
  category_id: string
  thumbnail: string
  shipping: {
    free_shipping: boolean
  }
}

// MeliAvailableFilter representa los filtros obtenidos 
// desde Mercado libre.
interface MeliAvailableFilter {
  id: string
  name: string
  type: string
  values: Array<{
    id: string
    name: string
    results: number
  }>
}

// MeliSearchResponse representa la respuesta de una 
// busqueda en Mercado libre.
interface MeliSearchResponse {
  results: MeliItem[]
  available_filters: MeliAvailableFilter[]
}

// MeliDescriptionResponse representa la respuesta de
// Mercado libre con la descripcion de un producto
interface MeliDescriptionResponse {
  plain_text: string
}

// MeliCategoryResponse representa la respuesta de 
// Mercado libre con las categorias de un producto.
interface MeliCategoryResponse {
  path_from_root: Array<{
    id: string
    name: string
  }>
}

// MeliDetailResponse representa la respuesta de 
// Mercado libre con el detalle de un producto.
interface MeliDetailResponse extends MeliItem { }
