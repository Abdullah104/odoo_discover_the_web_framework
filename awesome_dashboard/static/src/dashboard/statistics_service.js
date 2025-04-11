import { registry } from "@web/core/registry";
import { rpc } from "@web/core/network/rpc";
import { reactive } from "@odoo/owl";

export const statisticsService = {
  start() {
    const statistics = reactive({ isReady: false });

    async function loadData() {
      Object.assign(statistics, await rpc("/awesome_dashboard/statistics"), {
        isReady: true,
      });
    }

    loadData();
    setInterval(loadData, 10 * 60 * 1000);

    return statistics;
  },
};

registry
  .category("services")
  .add("awesome_dashboard.statistics", statisticsService);
