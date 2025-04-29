import { Component, useState } from "@odoo/owl";

import { browser } from "@web/core/browser/browser";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";
import { Layout } from "@web/search/layout";

import { ConfigurationsDialog } from "../configurations_dialog/configurations_dialog";
import { DashboardItem } from "./dashboard_item/dashboard_item";
import { NumberCard } from "./number_card/number_card";
import { PieChartCard } from "./pie_chart_card/pie_chart_card";

class AwesomeDashboard extends Component {
  static template = "awesome_dashboard.AwesomeDashboard";
  static components = { Layout, DashboardItem, NumberCard, PieChartCard };

  setup = () => {
    this.display = { controlPanel: {} };

    this.action = useService("action");
    this.dialog = useService("dialog");

    this.statistics = useState(useService("awesome_dashboard.statistics"));
    this.state = useState({
      disabledItems:
        browser.localStorage.getItem("disabledDashboardItems")?.split(",") ||
        [],
    });

    this.items = registry.category("awesome_dashboard").getAll();
  };

  openCustomersView = () => this.action.doAction("base.action_partner_form");

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

  openConfigurations = () => {
    ConfigurationsDialog,
      {
        items: this.items,
        disabledItems: this.state.disabledItems,
        onUpdateConfiguration: this.updateConfiguration,
      };
  };

  updateConfiguration = (newDisabledItems) =>
    (this.state.disabledItems = newDisabledItems);
}

registry
  .category("lazy_components")
  .add("awesome_dashboard.AwesomeDashboard", AwesomeDashboard);
