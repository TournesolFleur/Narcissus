export module Fetch {
  /**
   * 发送Post请求
   * @param url 请求地址
   * @param data json字符串
   * @returns 
   */
  export function post<T>(url: string, data: string) {
    return fetch(url, {
      method: "post",
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    })
  }
}