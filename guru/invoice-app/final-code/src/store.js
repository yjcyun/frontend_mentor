import { createStore } from "vuex";

export const store = createStore({
  state: {
    invoiceModal: null,
    invoices: [],
    filter: [],
    editInvoice: null,
  },
  getters: {
    getInvoices(state) {
      return state.invoices;
    },
    getInvoiceById(state) {
      return (id) => {
        return state.invoices.find((invoice) => invoice.id === id);
      };
    },
    getEditInvoice(state) {
      return state.editInvoice;
    },
    getInvoiceModal(state) {
      return state.invoiceModal;
    },
    getFilter(state) {
      return state.filter;
    },
    getInvoicesByFilter(state) {
      const noFilters = !Object.values(state.filter).some(Boolean);
      if (noFilters) return state.invoices;

      return state.invoices.filter((inv) => {
        return Object.entries(state.filter).some(
          ([key, value]) => key === inv.status && value
        );
      });
    },
  },
  mutations: {
    toggleModal(state) {
      state.invoiceModal = !state.invoiceModal;
    },
    toggleEditInvoice(state, payload) {
      state.editInvoice = payload;
    },
    setInvoices(state, payload) {
      state.invoices = payload;
    },
    addInvoice(state, payload) {
      state.invoices.unshift(payload);
    },
    saveInvoiceById(state, payload) {
      const id = state.invoices.findIndex((inv) => inv.id === payload.id);
      state.invoices[id] = payload.data;
    },
    updateStatusById(state, payload) {
      const id = state.invoices.findIndex((inv) => inv.id === payload.id);
      state.invoices[id].status = payload.status;
    },
    deleteInvoice(state, id) {
      state.invoices = state.invoices.filter((inv) => inv.id !== id);
    },
    updateFilter(state, payload) {
      state.filter = payload;
    },
  },
  actions: {
    toggleModal(context) {
      context.commit("toggleModal");
    },
    toggleEditInvoice(context, payload) {
      context.commit("toggleEditInvoice", payload);
    },
    setInvoices(context, data) {
      context.commit("setInvoices", data);
    },
    addInvoice(context, newInvoice) {
      context.commit("addInvoice", newInvoice);
    },
    saveInvoiceById(context, payload) {
      context.commit("saveInvoiceById", payload);
    },
    updateStatusById(context, payload) {
      context.commit("updateStatusById", payload);
    },
    deleteInvoice(context, id) {
      context.commit("deleteInvoice", id);
    },
    updateFilter(context, filter) {
      context.commit("updateFilter", filter);
    },
  },
});
