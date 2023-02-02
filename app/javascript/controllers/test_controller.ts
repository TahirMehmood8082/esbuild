import { Controller } from "@hotwired/stimulus"
let message: string = "esbuild configure yahoo!"
// Connects to data-controller="test"
export default class extends Controller {
  connect() {
    console.log(message)
  }
}
