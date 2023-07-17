

export const INDIVIDUALUSER_LIST_ROUTE = {
    path:'list',
    get url(): string {
      return `${INDIVIDUALUSER_LIST_ROUTE.url}/${this.path}`;
    }
}

export const INDIVIDUALUSER_ADD_ROUTE = {
  path:'add',
  get url(): string {
    return `${INDIVIDUALUSER_ADD_ROUTE.url}/${this.path}`
  }
}
export const INDIVIDUALUSER_EDIT_ROUTE = {
  path:'edit',
  get url(): string {
    return `${INDIVIDUALUSER_EDIT_ROUTE.url}/${this.path}`
  }
}