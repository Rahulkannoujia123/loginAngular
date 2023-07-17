

export const ITEM_LIST_ROUTE = {
    path:'list',
    get url(): string {
      return `${ITEM_LIST_ROUTE.url}/${this.path}`;
    }
}

export const ITEM_ADD_ROUTE = {
  path:'add',
  get url(): string {
    return `${ITEM_ADD_ROUTE.url}/${this.path}`
  }
}
export const ITEM_EDIT_ROUTE = {
  path:'edit',
  get url(): string {
    return `${ITEM_EDIT_ROUTE.url}/${this.path}`
  }
}