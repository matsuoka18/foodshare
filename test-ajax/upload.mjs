
export default async function upload (accessToken, name, file) {
    const method = 'POST'
    const url = 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart'
    const metadata = new Blob([JSON.stringify({name})], {
      type: 'application/json; charset=UTF-8',
    })
  
    const formData = new FormData()
    formData.append('Metadata', metadata)
    formData.append('Media', file)
  
    return await fetch(url, {
      method,
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
      body: formData,
    })
  }