const PostUsers = async () => {
  try {
    const response = await fetch("localhost:8080/users");
    const data = await response.json();
    // Aquí puedes trabajar con los datos recibidos
    console.log(data);
  } catch (error) {
    // Manejo de errores
    console.error("Error:", error);
  }
};

export default PostUsers;