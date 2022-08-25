<template>
  <div class="summary box">
    <div class="sender">
      <div class="sender__id">
        <h3 class="h3">
          <span class="hash">#</span>
          <span>{{ id }}</span>
        </h3>
        <p class="body1">{{ description }}</p>
      </div>
      <div class="sender__address">
        <p class="body2">{{ formattedSenderAddress }}</p>
      </div>
    </div>
    <div class="client">
      <div class="client-left__col">
        <div class="client__col client__col--1">
          <info-block
            label="Invoice Date"
            :body="formattedInvoiceDate"
          ></info-block>
          <info-block label="Payment Due" :body="formattedDueDate"></info-block>
        </div>
        <div class="client__col">
          <info-block
            label="Bill To"
            :body="clientName"
            :subBody="formattedClientAddress"
          ></info-block>
        </div>
      </div>
      <div class="client__col">
        <info-block label="Sent To" :body="clientEmail"></info-block>
      </div>
    </div>
    <items-table :items="items" :total="total"></items-table>
  </div>
</template>

<script>
import InfoBlock from "./InfoBlock.vue";
import ItemsTable from "./ItemsTable.vue";
import formatDate from "../../utils/format-date.js";

export default {
  components: { InfoBlock, ItemsTable },
  props: [
    "id",
    "description",
    "senderAddress",
    "createdAt",
    "paymentDue",
    "paymentTerms",
    "clientName",
    "clientAddress",
    "clientEmail",
    "items",
    "total",
  ],
  computed: {
    formattedInvoiceDate() {
      return formatDate(this.createdAt);
    },
    formattedDueDate() {
      const createdAt = new Date(this.createdAt);
      const dueDateInNumber = createdAt.setDate(
        createdAt.getDate() + Number(this.paymentTerms)
      );
      const dueDate = new Date(dueDateInNumber);

      return formatDate(this.paymentDue || dueDate);
    },
    formattedClientAddress() {
      return Object.values(this.clientAddress).join(" ");
    },
    formattedSenderAddress() {
      return Object.values(this.senderAddress).join(" ");
    },
  },
};
</script>

<style scoped>
.summary {
  margin-top: 16px;
  margin-bottom: 77px;
  padding: 24px;
}

.sender {
  display: flex;
  flex-direction: column;
  margin-bottom: 31px;
  color: var(--element-4);
}

.sender__id {
  margin-bottom: 30px;
}

.sender__id h3 {
  color: var(--text-0);
}

.sender__id h3 .hash {
  color: var(--element-5);
}

.sender__address {
  width: 96px;
  text-align: left;
}

.client {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.client__col {
  flex: 1;
}

.client-left__col {
  display: flex;
  gap: 41px;
}

.client__col--1 {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

@media (min-width: 640px) {
  .summary {
    margin-top: 24px;
    padding: 32px;
    margin-bottom: 0;
  }

  .sender {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 21px;
  }

  .sender__id h3 {
    margin-bottom: 8px;
  }

  .sender__address {
    width: 94px;
    text-align: right;
  }

  .client {
    flex-direction: row;
    gap: 110px;
  }

  .client-left__col {
    gap: 98px;
  }
}

@media (min-width: 768px) {
  .summary {
    padding: 48px;
  }
}
</style>
