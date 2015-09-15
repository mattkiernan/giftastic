Rails.application.routes.draw do
  resource :booth
  resource :carousel
  resources :images

  root "booths#show"
end
