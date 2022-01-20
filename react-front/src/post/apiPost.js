export const create=(userId,token,post)=>{
   
   return fetch(`${process.env.REACT_APP_API_URL}/post/new/${userId}`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            Authorization:`Bearer ${token}`
        },
        body:post
    })
    .then(response=>{
        return response.json();
    })
    .catch (err=>
        console.log(err)
        );
};

export const list=()=>{
    return fetch(`${process.env.REACT_APP_API_URL}/posts`,{
        method:"GET",
       
    })
    .then(response=>{
        return response.json();
    })
    .catch (err=>console.log(err));
};
export const singlePost=(postId)=>{
    return fetch(`${process.env.REACT_APP_API_URL}/post/${postId}`,{
        method:"GET",
       
    })
    .then(response=>{
        return response.json();
    })
    .catch (err=>console.log(err));
};

export const listByUser=(userId,token)=>{
    return fetch(`${process.env.REACT_APP_API_URL}/posts/by/${userId}`,
    {
        method:"GET",
       headers:{
           Accept:"application/json",
           "Content-Type":"application/json",
           Authorization:`Bearer ${token}`
       },
    })
    .then(response=>{
        return response.json();
    })
    .catch (err=>console.log(err));
};


export const remove=(postId,token)=>{
    return fetch(`${process.env.REACT_APP_API_URL}/post/${postId}`,{
         method:"DELETE",
         headers:{
             Accept:"application/json",
             "Content-Type":"application/json",
             Authorization:`Bearer ${token}`
         }
     })
     .then(response=>{
         return response.json();
     })
     .catch (err=>console.log(err));
 };
 export const update=(postId,token,post)=>{
    
   return fetch(`${process.env.REACT_APP_API_URL}/post/${postId}`,
   {
        method:"PUT",
        headers:{
            Accept:"application/json",
            Authorization:`Bearer ${token}`
        },
        body:post
    })
    .then(response=>{
        return response.json();
    })
    .catch (err=>console.log(err));
};
export const like = (userId, token, postId) => {
    return fetch(`${process.env.REACT_APP_API_URL}/post/like`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body:JSON.stringify({userId,postId })
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const unlike = (userId, token, postId) => {
    return fetch(`${process.env.REACT_APP_API_URL}/post/unlike`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ userId, postId })
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const comment = (userId, token, postId, comment) => {
    return fetch(`${process.env.REACT_APP_API_URL}/post/comment`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ userId, postId, comment })
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const uncomment = (userId, token, postId, comment) => {
    return fetch(`${process.env.REACT_APP_API_URL}/post/uncomment`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ userId, postId, comment })
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
export const createCategory = (userId,token,category) => {
    return fetch(`${process.env.REACT_APP_API_URL}/category/create/${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization:`Bearer ${token}`
        },
        body: JSON.stringify(category)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
  };
  export const createProduct = (userId,token,product) => {
    return fetch(`${process.env.REACT_APP_API_URL}/product/create/${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization:`Bearer ${token}`
        },
        body:product
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
  };
  
  export const getCategories=()=>{
    return fetch(`${process.env.REACT_APP_API_URL}/categories`, {
        method: 'GET',
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
  };
  
  export const getProducts=(sortBy)=>{
    return fetch(`${process.env.REACT_APP_API_URL}/products?sortBy=${sortBy}&order=desc&limit=10`, {
        method: 'GET',
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
  };
  

  export const getFilteredProducts = (skip, limit, filters = {}) => {
    const data = {
        limit,
        skip,
        filters
    };
    return fetch(`${process.env.REACT_APP_API_URL}/products/by/search`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
    }

    export const getPurchaseHistory = (userId, token) => {
        return fetch(`${process.env.REACT_APP_API_URL}/orders/by/user/${userId}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                return response.json();
            })
            .catch(err => console.log(err));
    };


    export const listOrders = (userId, token) => {
        return fetch(`${process.env.REACT_APP_API_URL}/order/list/${userId}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                return response.json();
            })
            .catch(err => console.log(err));
    };


    export const getStatusValues = (userId, token) => {
        return fetch(`${process.env.REACT_APP_API_URL}/order/status-values/${userId}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                return response.json();
            })
            .catch(err => console.log(err));
    };
    
    export const updateOrderStatus = (userId, token, orderId, status) => {
        return fetch(`${process.env.REACT_APP_API_URL}/order/${orderId}/status/${userId}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ status, orderId })
        })
            .then(response => {
                return response.json();
            })
            .catch(err => console.log(err));
    };

    
    export const deleteProduct = (productId, userId, token) => {
        return fetch(`${process.env.REACT_APP_API_URL}/product/${productId}/${userId}`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                return response.json();
            })
            .catch(err => console.log(err));
    };
    
    export const getProduct = productId => {
        return fetch(`${process.env.REACT_APP_API_URL}/product/${productId}`, {
            method: 'GET'
        })
            .then(response => {
                return response.json();
            })
            .catch(err => console.log(err));
    };
    
    export const updateProduct = (productId, userId, token, product) => {
        return fetch(`${process.env.REACT_APP_API_URL}/product/${productId}/${userId}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: product
        })
            .then(response => {
                return response.json();
            })
            .catch(err => console.log(err));
    };

    export const updateCategory = (categoryId, userId, token, category) => {
        return fetch(`${process.env.REACT_APP_API_URL}/category/${categoryId}/${userId}`, {
            method: 'PUT',
            headers: {
                // content type?
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(category)
        })
            .then(response => {
                return response.json();
            })
            .catch(err => console.log(err));
    };