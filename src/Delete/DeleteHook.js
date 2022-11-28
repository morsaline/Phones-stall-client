const UseDelete = async (id) => {
  const res = await fetch(`https://serverside-sigma.vercel.app/user/${id}`, {
    method: "DELETE",
  });
  return await res.json();
};

export default UseDelete;
