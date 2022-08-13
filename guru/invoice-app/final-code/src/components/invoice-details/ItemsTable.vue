<template>
  <div class="table-wrapper">
    <table>
      <!-- Table Head -->
      <thead class="body2">
        <tr>
          <th>Item Name</th>
          <th class="qty">QTY.</th>
          <th class="price">Price</th>
          <th class="total">Total</th>
        </tr>
      </thead>
      <!-- Desktop Table Body -->
      <tbody class="h4 desktop">
        <tr v-for="item of items" :key="item.name">
          <td>{{ item.name }}</td>
          <td class="qty">{{ item.quantity }}</td>
          <td class="price">£ {{ item.price }}</td>
          <td class="total">£ {{ item.total }}</td>
        </tr>
      </tbody>
      <!-- Mobile Table Body -->
      <tbody class="h4 mobile">
        <tr v-for="item of items" :key="item.name">
          <td>
            <span>{{ item.name }}</span>
            <br />
            <span class="unit-price"
              >{{ item.quantity }} x £ {{ item.price }}</span
            >
          </td>
          <td class="total">£ {{ item.total }}</td>
        </tr>
      </tbody>
      <!-- Table Foot -->
      <tfoot>
        <tr>
          <td class="body2">Amount Due</td>
          <td colspan="3" class="final-price">{{ formattedPrice }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import formatPrice from "../../utils/format-price.js";

export default {
  props: ["items", "total"],
  computed: {
    formattedPrice() {
      return formatPrice(this.total);
    },
  },
};
</script>

<style scoped>
.table-wrapper {
  background-color: #f9fafe;
  border-radius: 8px 8px 0px 0px;
  margin-top: 45px;
}

table {
  width: 100%;
  border-spacing: 0px;
}

thead {
  display: none;
}

tbody.desktop {
  display: none;
}

tbody td:first-child {
  padding: 12px 0 12px 24px;
}

tbody td:last-child {
  padding: 12px 24px 12px 0px;
}

tbody tr:first-child td {
  padding-top: 24px;
}

tbody tr:last-child td {
  padding-bottom: 24px;
}

tbody .total {
  vertical-align: middle;
}

.price,
.total {
  text-align: right;
}

.qty,
.price,
.unit-price {
  color: var(--color-blue-7E);
}

tfoot {
  background-color: var(--color-navy-37);
  color: var(--color-white);
}

tfoot td {
  padding: 24px;
}

tfoot td:first-child {
  border-radius: 0px 0px 0px 8px;
}

tfoot td:last-child {
  border-radius: 0px 0px 8px 0px;
}

tfoot .final-price {
  text-align: right;
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.5px;
}

@media (min-width: 640px) {
  thead {
    display: table-header-group;
  }

  thead th {
    text-align: left;
    padding: 32px 0px 16px 0px;
    color: var(--color-blue-7E);
  }

  thead th:nth-child(1) {
    padding: 32px 0px 16px 32px;
  }

  thead th:last-child {
    padding: 32px 32px 16px 0px;
  }

  tbody.desktop {
    display: table-row-group;
  }

  tbody.mobile {
    display: none;
  }

  tbody td {
    padding: 16px 0px;
  }

  tbody td:first-child {
    padding: 16px 0px 16px 32px;
  }

  tbody td:last-child {
    padding: 16px 32px 16px 0px;
  }

  tbody tr:first-child td {
    padding-top: 16px;
  }

  tbody tr:last-child td {
    padding-bottom: 40px;
  }

  .qty {
    text-align: center;
  }

  tfoot .final-price {
    font-size: 24px;
  }

  tfoot td {
    padding: 24px 32px;
  }
}
</style>
