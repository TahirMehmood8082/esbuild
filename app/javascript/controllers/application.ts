import { Application } from "@hotwired/stimulus"

const application = Application.start() as any

// Configure Stimulus development experience

(window as any).Stimulus   = application;

export { application };
