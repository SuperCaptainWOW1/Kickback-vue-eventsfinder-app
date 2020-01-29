export default {
  state: {
    info: {
      name: "Oleg.abdul",
      avatar:
        "https://tinyfac.es/data/avatars/7D3FA6C0-83C8-4834-B432-6C65ED4FD4C3-500w.jpeg"
    }
  },
  mutations: {
    setInfo(state, info) {
      state.info = info;
    },
    clearInfo(state) {
      // Find out what does it do
      state.info = { locale: state.info.locale };
    }
  },
  getters: {
    info: s => s.info
  }
};
