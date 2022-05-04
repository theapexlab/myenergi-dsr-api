Vue.createApp({
  data() {
    return {
      activeTab: 0,
      isError: false,
      isCreating: false,
      listRequestStatus: 'idle',
      createRequestStatus: 'idle',
      removeRequestStatus: 'idle',
      items: [],
      client: null,
      clientForRemove: null,
      token: null,
    };
  },
  methods: {
    openCreateModal() {
      this.isCreating = true;
    },
    closeCreateModal() {
      this.isCreating = false;
    },
    openRemoveModal(event) {
      const clientId = event.target.elements.clientId.value;
      const clientName = event.target.elements.clientName.value;
      this.clientForRemove = {
        clientId,
        clientName,
      };
    },
    closeRemoveModal() {
      this.clientForRemove = null;
    },
    closeModal() {
      this.client = null;
      this.listAppClients();
    },
    copySecret() {
      if (!this.client) {
        return;
      }
      navigator.clipboard.writeText(this.client.clientSecret);
    },
    createAppClient(event) {
      const clientName = event.target.elements.clientName.value;
      this.createRequestStatus = 'pending';
      fetch('/admin-api/create-app-client', {
        method: 'POST',
        body: JSON.stringify({ name: clientName }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((resp) => {
          if (!resp.ok) {
            throw new Error();
          }
          return resp.json();
        })
        .then((data) => {
          this.createRequestStatus = 'idle';
          this.isCreating = false;
          this.client = data;
        })
        .catch((error) => {
          console.error(error);
          this.createRequestStatus = 'error';
        });
    },
    removeAppClient(event) {
      const clientId = event.target.elements.clientId.value;
      const clientName = event.target.elements.clientName.value;
      if (clientName !== this.clientForRemove.clientName) {
        this.isError = true;
        return;
      }
      this.removeRequestStatus = 'pending';
      fetch('/admin-api/remove-app-client', {
        method: 'POST',
        body: JSON.stringify({ id: clientId }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((resp) => {
          if (!resp.ok) {
            throw new Error();
          }
          return resp.json();
        })
        .then((data) => {
          this.removeRequestStatus = 'idle';
          this.clientForRemove = null;
          return this.listAppClients();
        })
        .catch((error) => {
          console.error(error);
          this.removeRequestStatus = 'error';
        });
    },
    listAppClients() {
      this.items = [];
      this.listRequestStatus = 'pending';
      fetch('/admin-api/app-clients', { headers: { Authorizations: `Bearer ${this.token}` } })
        .then((resp) => {
          if (!resp.ok) {
            throw new Error(`${resp.status}: ${resp.statusText}`);
          }
          return resp.json();
        })
        .then((data) => {
          this.items = data;
          this.listRequestStatus = 'idle';
        })
        .catch((error) => {
          console.error(error);
          this.listRequestStatus = 'error';
        });
    },
    login(event) {
      const username = event.target.elements.username.value;
      const password = event.target.elements.password.value;
      console.log(username);
      fetch('/admin-api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })
        .then((resp) => {
          if (!resp.ok) {
            throw new Error(`${resp.status}: ${resp.statusText}`);
          }
          return resp.json();
        })
        .then((data) => {
          this.token = data.token;
          this.listAppClients();
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  mounted() {
    // this.listAppClients();
  },
}).mount('#root');
