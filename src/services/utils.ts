// getAutorSignature devuelve información del autor 
export function getAutorSignature(): Autor {
  return {
    name: 'Carlos',
    lastname: 'Escorche'
  }
}

// newItem transforma un producto recibido desde Mercado libre 
// a la representación interna. 
export function newItem(i: MeliItem): Item {
  return {
    id: i.id,
    title: i.title,
    picture: i.thumbnail,
    condition: i.condition,
    free_shipping: i.shipping.free_shipping,
    price: newPrice(i.price, i.currency_id)
  }
}

// newExtendedItem transforma el detalle de un producto que es 
// recibido desde Mercado libre a la representación interna.
export function newExtendedItem(i: MeliItem): ExtendedItem {
  const item = newItem(i) as ExtendedItem
  item.sold_quantity = i.sold_quantity
  item.description = ''
  return item
}

// newPrice transforma el precio de un producto a la representación interna. 
export function newPrice(price: number, currency: string): Price {
  const split = price.toString().split('.')
  return {
    currency,
    amount: price,
    decimals: Number(split[1])
  }
}
