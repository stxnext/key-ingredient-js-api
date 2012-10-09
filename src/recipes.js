

define(['require', 'backbone'], function(require, Backbone) {
  var KI = {};

  KI.Recipe = Backbone.Model.extend({

    urlRoot: require.toUrl('/r/api/v1/recipes/')

  });

  KI.RecipeCollection = Backbone.Collection.extend({

    model: KI.Recipe,
    url: require.toUrl('/r/api/v1/recipes/'),

    initialize: function(models, options) {
      options = options || {};
      this.hasMore = true;
      this.params = options.params || {};
      this.params.limit = this.params.limit || 20;
    },

    parse: function(response) {
      this.params.offset = response.cursor;
      var recipes = response.recipes || [];
      this.hasMore = recipes.length > 0;

      return recipes;
    },

    getMore: function() {
      this.fetch({
        data: this.params,
        add: this.params.offset
      });
    }

  });

  KI.PopularRecipeCollection = KI.RecipeCollection.extend({

    url: require.toUrl('/r/api/v1/recipes/popular/')

  });

  KI.RecipeStreamCollection = KI.RecipeCollection.extend({

    url: require.toUrl('/r/api/v1/recipes/stream/')

  });

  KI.RecipeSearchCollection = KI.RecipeCollection.extend({

    url: require.toUrl('/r/api/v1/recipes/search/')

  });

  return KI;
});
