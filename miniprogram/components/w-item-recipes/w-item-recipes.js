// components/w-item-recipes/w-item-recipes.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      dataJsonSet: {
        type: Object,
        value:{}
      }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    showCoverImageError: function(e)
    {
      console.log("coverImage=", e);
    }
  }
})
