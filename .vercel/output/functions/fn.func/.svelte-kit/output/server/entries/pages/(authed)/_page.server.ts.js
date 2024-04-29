function load({ cookies }) {
  const loggedId = Number(cookies.get("loggedId"));
  return {
    loggedId
  };
}
const actions = {
  default: async ({ request }) => {
  }
};
export {
  actions,
  load
};
