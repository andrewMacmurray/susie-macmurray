require 'pp'
module Jekyll
  module CacheResizeFilter
    def cache_resize(link, width)
      production? ? cache_url(width) + link : link
    end

    private

    def cache_url(width)
      "#{cache_base_url}/width/#{width}/x/#{site_domain}"
    end

    def site_domain
      site["domain"]
    end

    def cache_base_url
      site["cache_url"]
    end

    def production?
      ENV["JEKYLL_ENV"] == "production"
    end

    def site
      @context.registers[:site].config
    end
  end
end

Liquid::Template.register_filter(Jekyll::CacheResizeFilter)