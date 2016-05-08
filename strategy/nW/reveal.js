function (a) {
        a || (window.NW = {}, a = window.NW), a.Views = a.Views || {}, $.scrollbarWidth = function () {
            var a, b, c;
            return void 0 === c && (a = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"), b = a.children(), c = b.innerWidth() - b.height(99).innerWidth(), a.remove()), c
        };
        var b = Backbone.View.extend({
            className: "nav-toggle-view",
            menuClosed: !0,
            events: {
                click: "togglePanel"
            },
            initialize: function () {
                this.$menu = $(".side-menu"), this.$contentModalOverlay = $('<div class="nw-xl-v1 content-modal-overlay">'), this.bindEvents()
            },
            bindEvents: function () {
                var a = this,
                    b = 27;
                $(document).on("keyup", function (c) {
                    c.keyCode !== b || a.menuClosed || a.togglePanel()
                }), $(document).on("click touchstart", _.debounce(function (b) {
                    b.target === a.$contentModalOverlay[0] && a.togglePanel()
                }, 400, !0))
            },
            togglePanel: function () {
                this.menuClosed ? this.reveal() : this.conceal(), this.menuClosed = !this.menuClosed
            },
            conceal: function () {
                return this.$menu.removeClass("revealed"), this.$contentModalOverlay.removeClass("revealed"), this.$contentModalOverlay.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function () {
                    $("body").attr("style", ""), this.menuClosed && this.$contentModalOverlay.remove()
                }.bind(this)), this
            },
            reveal: function () {
                var a = $.scrollbarWidth(),
                    b = a + "px";
                return $("body").css({
                    overflow: "hidden",
                    "margin-right": b
                }), this.$menu.addClass("revealed"), this.$contentModalOverlay.appendTo(".global-header"), setTimeout(function () {
                    this.$contentModalOverlay.addClass("revealed")
                }.bind(this), 10), this
            }
        });
        a.Views.NavToggleView = b
    }