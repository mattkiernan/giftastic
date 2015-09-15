class ImagesController < ApplicationController
  def index
    respond_to do |format|
      format.json { render json: @image }
      format.html
    end
  end

  def update
    image = load_image_from_url
    if image.update(image_params)
      redirect_to root_path
    end
  end

  def load_image_from_url
    Image.find(params[:id])
  end

  def image_params
    params.require(:image).permit(:url)
  end
end
