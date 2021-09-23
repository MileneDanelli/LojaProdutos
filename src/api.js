export const API_URL = 'http://127.0.0.1:8000/api';
export const URL_IMAGE = 'http://127.0.0.1:8000';

//Autenticação
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
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
      body: JSON.stringify(body),
    },
  };
}

export function LOGOUT(token) {
  return {
    url: API_URL + '/sair',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      withCredentials: true,
    },
  };
}

export function TOKEN_VALIDATE_POST(token) {
  return {
    url: API_URL + '/autologin',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    },
  };
}

export function USER_GET(token) {
  return {
    url: API_URL + '/user',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

// Produtos
export function PRODUTOS_POST(formData, token) {
  return {
    url: API_URL + '/produtos',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
        Accept: 'multipart/form-data',
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
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
        Accept: 'multipart/form-data',
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

// Categorias
export function CATEGORIAS_POST(formData, token) {
  return {
    url: API_URL + '/categorias',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
        Accept: 'multipart/form-data',
      },

      withCredentials: true,
      body: formData,
    },
  };
}

export function CATEGORIA_PUT(formData, id, token) {
  return {
    url: `${API_URL}/categorias/${id}`,
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
        Accept: 'multipart/form-data',
      },
      withCredentials: true,
      body: formData,
    },
  };
}

export function CATEGORIAS_GET(token) {
  return {
    url: `${API_URL}/categorias`,
    options: {
      method: 'GET',
      cache: 'no-store',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function CATEGORIA_GET(id) {
  return {
    url: `${API_URL}/categorias/${id}`,
    options: {
      method: 'GET',
      cache: 'no-store',
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
    },
  };
}

export function CATEGORIA_DELETE(id) {
  return {
    url: `${API_URL}/categorias/${id}`,
    options: {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
    },
  };
}
