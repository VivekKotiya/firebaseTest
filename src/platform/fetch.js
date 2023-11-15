export const getPosts = async (id = 0) => {
    let response = null;
    if (id) {
      response = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
    } else {
      response = await fetch("https://jsonplaceholder.typicode.com/posts/");
    }
    console.log("Get post index 1 : ", await response.json());
  };
  
export const updatePost = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    console.log("data update : ", await response.json());
    //   console.log("data update : ", await response.json());
  };
  
export const putPost = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      body: JSON.stringify({
        id: 1,
        title: "sd",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    console.log("data put : ", await response.json());
};
  