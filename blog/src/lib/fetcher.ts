import { getToken } from "@/auth"

export async function fetcher<T>(url: string, options = {} as RequestInit): Promise<T> {
  let response = await fetch(url, options)
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
  return response.json()
}

export async function withAuthFetch<K>(
  url: string,
  options = {} as RequestInit
): Promise<K> {
  return fetcher<K>(url, {
    ...options,
    headers: {
      ...options.headers,
      'Authorization': 'Bearer ' + getToken()
    }
  })
}