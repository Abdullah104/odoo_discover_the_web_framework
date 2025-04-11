import { Component, useState } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { Layout } from "@web/search/layout";
import { useService } from "@web/core/utils/hooks";

import { DashboardItem } from "./dashboard_item/dashboard_item";
import { NumberCard } from "./number_card/number_card";
import { PieChartCard } from "./pie_chart_card/pie_chart_card";

class AwesomeDashboard extends Component {
  static template = "awesome_dashboard.AwesomeDashboard";
  static components = { Layout, DashboardItem, NumberCard, PieChartCard };

  setup = () => {
    this.display = { controlPanel: {} };

    this.action = useService("action");

    this.statistics = useState(useService("awesome_dashboard.statistics"));
  };

  openCustomersKanban = () => this.action.doAction("base.action_partner_form");

  openLeads = () =>
    this.action.doAction({
      type: "ir.actions.act_window",
      name: "All leads",
      res_model: "crm.lead",
      views: [
        [false, "list"],
        [false, "form"],
      ],
    });
}

registry
  .category("lazy_components")
  .add("awesome_dashboard.AwesomeDashboard", AwesomeDashboard);
