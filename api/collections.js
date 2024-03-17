// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const url = process.env.REACT_APP_FLUX_API

export const getCollection = async (id) => {
  return await (await fetch(`${url}?collection=${id}&fields=collections{id,name,items{id,name,parentId,fields{}}}`)).json()
}

export const getSeoContent = async () => {
  return await (await fetch(`${url}?fields=id,defaultMetaTitle,analyticsId,facebookId,organizationLegal,url`)).json()
}

export const getItem = async (id) => {
  return await (await fetch(`${url}?item=${id}&fields=items{name,id,parentId,fields{}}`)).json()
}

export const getAnalytics = async () => {
  return await (await fetch(`${url}?fields=analyticsId`)).json()
}