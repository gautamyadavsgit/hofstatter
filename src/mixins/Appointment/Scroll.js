const scroll = (id) => {
  setTimeout(() => {
    const element = document.getElementById(id);
    element.scrollIntoView();
  }, 100);
};

export default scroll;
