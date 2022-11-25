const UseDelete = async (id) => {
  const res = await fetch(`http://localhost:5000/user/${id}`, {
    method: "DELETE",
  });
  return await res.json();
};

export default UseDelete;
