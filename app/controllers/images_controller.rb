class ImagesController < ApplicationController
  def show
  end

  def index
    respond_to do |format|
      format.json { render json: @image }
      format.html
    end
  end

  def update
    image = load_image_from_url
    image.update(image_params)
    render :json => {:status => :ok}
  end

  def load_image_from_url
    Image.find(params[:id])
  end

  def image_params
    params.require(:image).permit(:url)
  end
end
