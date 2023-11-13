"use strict";

/**
 * @typedef {import('moleculer').ServiceSchema} ServiceSchema Moleculer's Service Schema
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

/** @type {ServiceSchema} */
module.exports = {
	name: "greeter",

	/**
	 * Settings
	 */
	settings: {

	},

	/**
	 * Dependencies
	 */
	//Here we put services that greeter service depends on
	//during boot time, molecular will first start the helper service
	dependencies: [],

	/**
	 * Actions
	 */
	//These are public
	//other services can call them
	actions: {

		/**
		 * Say a 'Hello' action.
		 *
		 * @returns
		 */
		
		async hello(ctx) {
			const payload = 'Hello from greeter';

			//action calls are asynchronous
			//so we make hello async
			const number = await ctx.call("helper.random");

			ctx.emit("hello.called", { payload, number});
			
			return { payload, number};
		},

		/**
		 * Welcome, a username
		 *
		 * @param {String} name - User name
		 */
		welcome: {
			rest: "/welcome",
			params: {
				name: "string"
			},
			/** @param {Context} ctx  */
			async handler(ctx) {
				return `Welcome, ${ctx.params.name}`;
			}
		}
	},

	/**
	 * Events
	 */
	events: {

	},

	/**
	 * Methods
	 */
	//private functions that are only accessible within greeter scope
	methods: {

	},

	/**
	 * Service created lifecycle event handler
	 */
	created() {

	},

	/**
	 * Service started lifecycle event handler
	 */
	async started() {

	},

	/**
	 * Service stopped lifecycle event handler
	 */
	async stopped() {

	}
};
