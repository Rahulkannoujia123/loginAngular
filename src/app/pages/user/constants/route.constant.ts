import { USER_ROUTE } from "src/app/constants/route.constant";

export const USER_DETAIL_ROUTE = {
    path:'list',
    get url(): string {
      return `${USER_ROUTE.url}/${this.path}`;
    }
}

export const USER_VIEW_ROUTE = {
  path:'details',
  get url(): string {
    return `${USER_ROUTE.url}/${this.path}`
  }
}
