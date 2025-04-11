import { registry } from "@web/core/registry";
import { rpc } from "@web/core/network/rpc";

export const statisticsService = {
  start() {
    const statistics = { isReady: false };

    async function loadData() {
      Object.assign(statistics, await rpc("/awesome_dashboard/statistics"), {
        isReady: true,
      });
    }

    loadData();

    return statistics;
  },
};

registry
  .category("services")
  .add("awesome_dashboard.statistics", statisticsService);
