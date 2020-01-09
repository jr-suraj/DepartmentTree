<template>
	<transition name="slide-fade">
		<draggable 
      class="dragArea"
      ghost-class="ghost"
      :list="tasks"
      group="tree"
      tag="ul"
      >
			<li class="node" v-for="dep in tasks" :key="dep.name">
				<div class="node-content row">
          <el-collapse class="border-0 w-100" accordion>
            <el-collapse-item class="list-group">
              <template class="border-0 bg-success" slot="title">
                <div class="col-12 d-flex w-100 justify-content-between align-items-center">
                  {{ dep.name }}
                  <span v-if="dep.employees" class="badge badge-primary badge-pill"><img class="mr-2" src="@/assets/emp.svg" alt=""> {{ dep.employees.length }}</span>
                  <span v-else class="badge badge-primary badge-pill"><img class="mr-2" src="@/assets/emp.svg" alt=""> 0</span>
                </div>
              </template>
              <draggable 
                ghost-class="ghost"
                :group="{ name: 'people' }"
                :list="dep.employees"
                class="dragArea d-flex flex-column"
              >
                <li v-for="emp in dep.employees" :key="emp.id" class="w-100">
                  <div class="d-flex py-2">
                    <div class="col-4">
                      <el-avatar :src="emp.avatar"></el-avatar>
                    </div>
                    <div class="col-8 text-left text-capitalize">
                      <h6 class="avatar-name">{{ emp.name }}</h6>
                      <h6>{{ emp.position }}</h6>
                    </div>
                  </div>
                </li>
              </draggable>
            </el-collapse-item>
          </el-collapse>
				</div>
				<span class="expander" @click="toggle(dep)" v-if="dep.children && dep.children.length">{{ dep.children.length }}</span>
				
				<department v-show="dep.show" :tasks="dep.children" />
				
			</li>
		</draggable>
	</transition>
</template>
<script>
import draggable from "vuedraggable";
export default {
  name: "department",
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
.dep_tree {
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
    position: relative;
    margin: 0 0 0 10px;
    display: inline-flex;
    align-items: center;
    width: 250px;
    flex-flow: column;
    border: 1px solid #ddd;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 0px 5px rgba(0, 0, 0, 0.15);
    border-top: 0;
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
    .el-collapse-item__arrow {
      display: none;
    }
    .el-collapse-item__header, .el-collapse-item__wrap, .el-collapse-item__content {
      border: none;
      transition: all .5s;
    }
    .el-collapse-item__header {
      border-radius: 8px;
    }
     .el-collapse-item__wrap {
       display: flex;
       flex-flow: column;
       border-radius: 0 0 8px 8px;
     }
     .el-collapse-item__header .badge {
       font-size: 1.1em;
       padding: .6em 1em;
       border-radius: 8px;
       background: #1ED292;
     }
     .el-collapse-item__header.is-active {
       background:#1ED292;
       color: #fff;
       border-radius: 8px 8px 0 0;
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