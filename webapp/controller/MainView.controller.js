sap.ui.define([
    "sap/ui/core/mvc/Controller", "sap/m/MessageToast"
],
/**
* @param {typeof sap.ui.core.mvc.Controller} Controller
*/ 
function (Controller,MessageToast) {
    "use strict";

    return Controller.extend("com.training.day3exer1gonzales.controller.MainView", {
        onInit() {
        },

    onAddItem: function (){
      var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
      var sMsg = oTextBundle.getText("addButtonMsg");
      this.fnDisplayMsg(sMsg);
  },

  fnDisplayMsg: function (sMsg){
      MessageToast.show(sMsg);
  },

  onChangeMOP: function (oEvent) {
      var sSelectedKey = oEvent.getParameter("selectedItem").getProperty("key");
      var oMobileLabel = this.getView().byId("idLblPhone");
      var oMobileInput = this.getView().byId("idInputPhone");
      var ccLabel = this.getView().byId("idLblCreditCard");
      var ccInput = this.getView().byId("idInputCreditCard");

      if (sSelectedKey === "GCASH"){
          var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
          var sMsg = oTextBundle.getText("GCashlb5");
          this.fnDisplayMsg(sMsg);
          // show the mobile field
          oMobileLabel.setVisible(true);
          oMobileInput.setVisible(true);
          ccLabel.setVisible(false);
          ccInput.setVisible(false);
      } else if (sSelectedKey === "CC"){
          var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
          var sMsg = oTextBundle.getText("CreditCardlb4");
          this.fnDisplayMsg(sMsg);
          // show the mobile field
          ccLabel.setVisible(true);
          ccInput.setVisible(true);
          oMobileLabel.setVisible(false);
          oMobileInput.setVisible(false);
      }
      else {
          var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
          var sMsg = oTextBundle.getText("CashonDeliverylb3");
          this.fnDisplayMsg(sMsg);
          oMobileLabel.setVisible(false);
          oMobileInput.setVisible(false);
          ccLabel.setVisible(false);
          ccInput.setVisible(false);
      }
  },

  onPressCheckout: function (){
      var oInputFNameValue = this.getView().byId("idInptFName").getValue();
      var oInputLNameValue = this.getView().byId("idInptLName").getValue();

      // Check if first name is blank
      if (oInputFNameValue === "" ){ 
          var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
          var sMsg = oTextBundle.getText("RequiredFieldblank");
          this.fnDisplayMsg(sMsg);
      } else if (oInputFNameValue === "" && oInputLNameValue === ""){ 
        var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
        var sMsg = oTextBundle.getText("RequiredFieldblank");
        this.fnDisplayMsg(sMsg);
      }
  },

 });
});