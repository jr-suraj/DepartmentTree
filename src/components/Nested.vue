<template>
	<transition name="slide-fade">
		<draggable 
      class="dragArea"
      ghost-class="ghost"
      :list="tasks"
      tag="ul"
      group="people">
			<li class="node" v-for="(emp, index) in tasks" :key="index">
				<div class="node-content row">
				<div class="">
					<el-avatar :src="emp.avatar"></el-avatar>
				</div>
				<div class="text-capitalize">
          <h6 class="avatar-name">{{ emp.name }}</h6>
          <h6>{{ emp.position }}</h6>
          <h6 class="bthr-text-green font-weight-bold">{{ emp.company }}</h6>
				</div>
        <div class="node-links">
          <el-tooltip class="item" effect="light" content="Profile" placement="top">
            <i class="tree-icon el-icon-user" @click="() => profile(node, data)"></i>
          </el-tooltip>
        </div>
				</div>
				<!-- <span class="expander" @click="isOpen = !isOpen" v-if="el.children && el.children.length">{{ isOpen ? '-' : '+' }}</span> -->
				<span class="expander" @click="toggle(emp)" v-if="emp.children && emp.children.length">{{ emp.children.length }}</span>
				
				<nested-draggable v-show="emp.show" :tasks="emp.children" />
				
			</li>
		</draggable>
	</transition>
</template>
<script>
import draggable from "vuedraggable";
export default {
  name: "nested-draggable",
  props: {
    tasks: {
      required: true,
      type: Array
    }
  },
  data: function () {
    return {
      show: true
    }
  },
  components: {
    draggable
  },
  computed: {

	},
	methods: {
		toggle (emp) {
			emp.show = !emp.show
		},
	},
  
};
</script>

<style lang="scss">
.slide-fade-enter-active {
  transition: all .2s ease;
}
.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
.vue-pan-zoom-scene {
  outline: none;
  cursor: move;
}
.expander {
  position: absolute;
  left: 50%;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  z-index: 10;
  margin-left: -12px;
  margin-top: -13px;
  background-color: #1ED292;
  border: 1px solid rgb(20, 192, 132);
  color: #fff;
  border-radius: 50%;
  box-shadow: 0 0 2px rgba(0,0,0,.15);
  cursor: pointer;
  // transition: all .3s ease;
}

.dragArea {
  display: table;
  text-align: center;
  padding: 0;
  width: 100%;
}
.dragArea li {
  display: table-cell;
}
.node-content {
  border: 1px solid #666;
}
.bthr-text-green {
  color: #1ed292;
}
.org_tree {
  max-height: 100vh;
  max-width: 100vw;
  // transition: all .3s ease;
  overflow: hidden;
  .node, .node ul {
    position: relative;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .node {
    display: table-cell;
    position: relative;
    padding-top: 20px;
  }

  > .node {
    padding: 20px 5px;
  }

  .node:after {
    left: 50% !important;
    border-left: 1px solid #ddd;
  }

  .node ul {
    display: table;
    position: relative;
    padding: 20px 0;
  }

  .node.is-expanded > .node ul {
    display: table;
  }

  .node ul {
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      width: 0;
      height: 20px;
      border-left: 1px solid #ddd;
    }

    &:after {
      content: "";
      display: table;
      clear: both;
    }
  }

  .node {
    &:after,
    &:before {
      transition: all 0.3s;
    }
  }

  .node ul {
    &:after,
    &:before {
      transition: all 0.3s;
    }
    &:empty:before {
      border-left: 0;
    }
  }

  .node {
    &:after,
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 19px;
      border-top: 1px solid #ddd;
    }

    &:last-child {
      &:after,
      &:before {
        border-top: 1px solid #ddd;
      }
    }

    &:first-child {
      &:after {
        border-top: 1px solid #ddd;
      }

      &:before {
        border-top: 1px solid #ddd;
        width: 0;
      }
    }

    &:last-child:after {
      width: 0;
    }
  }

  > .node {
    &:after {
      border-left: 0;
      border-top: 0 !important;
    }

    &:before {
      border: 0;
      border-top: 0 !important;
    }
  }

  .node-content {
    padding: 10px !important;
    position: relative;
    margin: 0 5px;
    display: inline-flex;
    align-items: center;
    width: 180px;
    flex-flow: column;
    border: 1px solid #ddd;
    height: auto;
    border-radius: 3px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
    > .node__expand-icon {
      border-radius: 50%;
    }

    &:hover > {
      .node__expand-icon {
        background: #fff;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
      }

      .is-leaf.node__expand-icon {
        visibility: hidden;
      }
    }
    .tree-icon {
      font-size: 0.8em;
      opacity: 0.4;
      padding: 4px;
      cursor: pointer;
      border: 1px solid #606266;
      border-radius: 50%;
      margin-bottom: 5px;
      font-weight: normal;
      outline: none;
    }
    .node-links {
      display: flex;
      flex-flow: column;
      position: absolute;
      right: 10px;
    }
    &:hover .tree-icon {
      opacity: 1;
    }
  }
}
// org tree
// independent employee list

.node-content {
  display: inline-block;
  width: 270px;
}

.el-avatar {
  width: 50px;
  height: 50px;
  line-height: 50px;
}

.avatar-name {
  white-space: normal;
  font-weight: bold;
}
.el-menu-vertical-demo {
	.el-submenu__title {
		display: none;
	}
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
	width: 250px;
	padding: 0;
	height: 100%;
  z-index: 20;
	.el-submenu__title {
		display: block;
    font-size: 1em;
    background:#FDC850;
    text-align: left;
	}
}

</style>