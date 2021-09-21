export const API_URL = 'http://127.0.0.1:8000/api';

export function CSRF_GET() {
  return {
    url: 'http://127.0.0.1:8000/sanctum/csrf-cookie',
    options: {
      method: 'GET',
    },
  };
}

export function REGISTRO(body) {
  return {
    url: API_URL + '/registrar',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
      body: JSON.stringify(body),
    },
  };
}

export function LOGIN(body) {
  return {
    url: API_URL + '/login',
    options: {
      method: 'POST',
      withCredentials: true,
      body: JSON.stringify(body),
    },
  };
}

export function PRODUTOS_POST(formData, token) {
  return {
    url: API_URL + '/produtos',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      withCredentials: true,
      body: formData,
    },
  };
}

export function PRODUTO_PUT(formData, id, token) {
  return {
    url: `${API_URL}/produtos/${id}`,
    options: {
      method: 'PUT',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      withCredentials: true,
      body: formData,
    },
  };
}

export function PRODUTOS_GET(token) {
  return {
    url: `${API_URL}/produtos`,
    options: {
      method: 'GET',
      cache: 'no-store',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function PRODUTO_GET(id) {
  return {
    url: `${API_URL}/produtos/${id}`,
    options: {
      method: 'GET',
      cache: 'no-store',
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
    },
  };
}

export function PRODUTO_DELETE(id) {
  return {
    url: `${API_URL}/produtos/${id}`,
    options: {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
    },
  };
}
