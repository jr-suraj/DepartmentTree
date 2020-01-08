<template>
  <div class="row">
    
    <div class="col-12 pl-0 d-flex org-chart">
      <div class="d-flex flex-row-reverse side-bar">
        <div>
          <el-button @click="isCollapse = !(isCollapse)" style="margin-left: -5px" size="small">
            <i :class="[isCollapse == true ? 'el-icon-d-arrow-right' : 'el-icon-d-arrow-left']"></i>
          </el-button>
        </div>
        <el-menu
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          :class="[ isCollapse == true ? '' : 'active']"
        >
          <!-- <el-collapse v-model="activeName" accordion>
            <el-collapse-item title="No Manager" name="1">
              <el-tree
                class="indie-emp-list"
                :data="freeEmp"
                node-key="id"
                default-expand-all
                :expand-on-click-node="false"
                @node-drag-start="handleDragStart"
                @node-drag-enter="handleDragEnter"
                @node-drag-leave="handleDragLeave"
                @node-drag-over="handleDragOver"
                @node-drag-end="makeDepend"
                @node-drop="handleDrop"
                draggable
                :allow-drop="unallowDrop"
                :allow-drag="allowDrag"
                :list="list1" group="employees"
              >
                  <div class="custom-tree-node row border-bottom" slot-scope="{ node, data }">
                    <div class="col-4 pl-0">
                      <el-avatar :src="node.label.avatar"></el-avatar>
                    </div>
                    <div class="col-8 p-0 text-left text-capitalize">
                      <h5 class="avatar-name">{{ node.label.employee }}</h5>
                      <h6>{{ node.label.position }}</h6>
                      <h6 class="bthr-text-green font-weight-bold">{{ node.label.company }}</h6>
                      <p>{{ node.label.depend }}</p>
                      <p>{{ node.isLeaf }}</p>
                    </div>
                    <div class="overlay"></div>
                    <el-tooltip class="item" effect="light" content="Add to chart" placement="top">
                        <i class="tree-icon add-to-chart el-icon-arrow-right" @click="() => addToChart(node, data)"></i>
                    </el-tooltip>
                  </div>
              </el-tree>
            </el-collapse-item>
          </el-collapse> -->
          <draggable class="" :list="list1" group="employees" @change="log">
            <transition-group type="transition" name="flip-list">
              <div
                class="node"
                v-for="(el, index) in list1"
                :key="index"
              >
              <!-- {{ element.label.name }} {{ index }} -->
                <div class="custom-tree-node row border-bottom">
                    <div class="col-4 pl-0">
                      <el-avatar :src="el.label.avatar"></el-avatar>
                    </div>
                    <div class="col-8 p-0 text-left text-capitalize">
                      <h5 class="avatar-name">{{ el.label.employee }}</h5>
                      <h6>{{ el.label.position }}</h6>
                      <h6 class="bthr-text-green font-weight-bold">{{ el.label.company }}</h6>
                    </div>
                    <div class="overlay"></div>
                    <el-tooltip class="item" effect="light" content="Add to chart" placement="top">
                        <i class="tree-icon add-to-chart el-icon-arrow-right" @click="() => addToChart(node, data)"></i>
                    </el-tooltip>
                  </div>
              </div>
            </transition-group>
          </draggable>
        </el-menu>
      </div>
      <!-- <draggable class="" :list="employees" group="employees" @change="log"> -->
        <draggable
          tag="el-tree"
          class="org_tree"
          :data="employees"
          :key="index"
          node-key="id"
          default-expand-all
          :expand-on-click-node="false"
        >
          <div class="custom-tree-node row" slot-scope="{ node, data }" >
            <div class="col-4 pl-0">
              <el-avatar :src="node.label.avatar"></el-avatar>
            </div>
            <div class="col-8 p-0 text-left text-capitalize">
              <h5 class="avatar-name">{{ node.label.employee }}</h5>
              <h6>{{ node.label.position }}</h6>
              <h6 class="bthr-text-green font-weight-bold">{{ node.label.depend }}</h6>
              <p>{{ node.isLeaf }}</p>
              
              <el-tooltip class="item" effect="light" content="Profile" placement="top">
                  <i class="tree-icon el-icon-user" @click="() => profile(node, data)"></i>
              </el-tooltip>
              <el-tooltip v-if="node.isLeaf" class="item" effect="light" content="Remove" placement="top">
                  <i class="tree-icon el-icon-close" @click="() => remove(node, data)"></i>
              </el-tooltip>
            </div>
            
          </div>
        </draggable>
      <!-- </draggable> -->
    </div>
  </div>
</template>
<script>
import draggable from "vuedraggable";

export default {
  components:{
    draggable
  },
  props: {},
  data() {
    return {
      isCollapse: false,
      activeName: "1",
      list1: [
				{ 
          label: {
            employee: "Juan",
            company: "Better Hr",
            position: "position",
            avatar: "https://api.adorable.io/avatars/285/abott@adorable.png",
            depend: true
          },
          children: [],
         },
				{ 
          label: {
            employee: "Jones",
            company: "Better Hr",
            position: "position",
            avatar: "https://api.adorable.io/avatars/285/abott@adorable.png",
            depend: true
          },
          children: [],
         },
				{ 
          label: {
            employee: "Joker",
            company: "Better Hr",
            position: "position",
            avatar: "https://api.adorable.io/avatars/285/abott@adorable.png",
            depend: true
          },
          children: [],
         },
				{ 
          label: {
            employee: "Edgard",
            company: "Better Hr",
            position: "position",
            avatar: "https://api.adorable.io/avatars/285/abott@adorable.png",
            depend: true
          },
          children: [],
         },
				{ 
          label: {
            employee: "Fergie",
            company: "Better Hr",
            position: "position",
            avatar: "https://api.adorable.io/avatars/285/abott@adorable.png",
            depend: true
          },
          children: [],
         },
			],
      employees: [
        
        {
          label: {
            employee: "employee one",
            company: "Better Hr",
            position: "position",
            avatar: "https://api.adorable.io/avatars/285/abott@adorable.png",
            depend: true
          },
          children: [
            {
              label: {
                employee: "employee two",
                company: "Better Hr",
                position: "position",
                avatar:
                  "https://api.adorable.io/avatars/285/abott@adorable.png",
                depend: false
              },
              children: [
                {
                  label: {
                    employee: "employee three",
                    company: "Better Hr",
                    position: "position",
                    avatar:
                      "https://api.adorable.io/avatars/285/abott@adorable.png",
                    depend: true
                  },
                  children: []
                }
              ]
            }
          ]
        },
        {
          label: {
            employee: "John Doe",
            company: "Better Hr",
            position: "CEO",
            avatar: "https://api.adorable.io/avatars/285/abott@adorable.png",
            depend: true
          },
          children: [
            {
              label: {
                employee: "employee five",
                company: "Better Hr",
                position: "position",
                avatar:
                  "https://api.adorable.io/avatars/285/abott@adorable.png",
                depend: true
              },
              children: [
                {
                  label: {
                    employee: "employee six",
                    company: "Better Hr",
                    position: "position",
                    avatar:
                      "https://api.adorable.io/avatars/285/abott@adorable.png",
                    depend: true
                  }
                }
              ]
            },
            {
              label: {
                employee: "Jacky",
                company: "Better Hr",
                position: "position",
                avatar:
                  "https://api.adorable.io/avatars/285/abott@adorable.png",
                depend: false
              },
              children: [
                {
                  label: {
                    employee: "John Doe",
                    company: "Better Hr",
                    position: "CEO",
                    avatar:
                      "https://api.adorable.io/avatars/285/abott@adorable.png",
                    depend: true
                  }
                }
              ]
            }
          ]
        },
        {
          label: {
            employee: "employee nine",
            company: "Better Hr",
            position: "position",
            avatar: "https://api.adorable.io/avatars/285/abott@adorable.png",
            depend: true
          },
          children: [
            {
              label: {
                employee: "employee ten",
                company: "Better Hr",
                position: "position",
                avatar:
                  "https://api.adorable.io/avatars/285/abott@adorable.png",
                depend: true
              },
              children: [
                {
                  label: {
                    employee: "employee eleven",
                    company: "Better Hr",
                    position: "position",
                    avatar:
                      "https://api.adorable.io/avatars/285/abott@adorable.png",
                    depend: true
                  }
                }
              ]
            },
            {
              label: {
                employee: "employee twelve",
                company: "Better Hr",
                position: "position",
                avatar:
                  "https://api.adorable.io/avatars/285/abott@adorable.png",
                depend: true
              },
              children: [
                {
                  label: {
                    employee: "employee thirteen",
                    company: "Better Hr",
                    position: "position",
                    avatar:
                      "https://api.adorable.io/avatars/285/abott@adorable.png",
                    depend: true
                  }
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label",
        employee: "employee",
        position: "position",
        department: "department",
        company: "company",
        avatar: "",
        depend: false
      }
    };
  },
  methods: {
    // makeDepend(draggingNode, dropNode, dropType, ev) {
    //   dropNode.label.depend = true;
    // },
    // handleDragStart(node, ev) {
    // console.log('drag start', node);
    // },
    // handleDragEnter(draggingNode, dropNode, ev) {
    // console.log('tree drag enter: ', dropNode.label);
    // },
    // handleDragLeave(draggingNode, dropNode, ev) {
    // console.log('tree drag leave: ', dropNode.label);
    // },
    // handleDragOver(draggingNode, dropNode, ev) {
    // console.log('tree drag over: ', dropNode.label);
    // },
    // handleDragEnd(draggingNode, dropNode, dropType, ev) {
    // console.log('tree drag end: ', dropNode && dropNode.label, dropType);
    // },
    // handleDrop(draggingNode, dropNode, dropType, ev) {
    // console.log('tree drop: ', dropNode.label, dropType);
    // },
    // unallowDrop (draggingNode, dropNode, type) {
    //   return type !== 'inner';
    // },
	// allowDrop(draggingNode, dropNode, type) {
	// if (dropNode.data.label === 'Level two 3-1') {
	// 	return type !== 'inner';
	// } else {
	// 	return true;
	// }
	// },
	// allowDrag(draggingNode) {
	// return draggingNode.data.label.indexOf('Level three 3-1-1') === -1;
  // }
    
    // dependNode(node, arr) {
    //   let index = 0;
    //   for(let n of node) {
    //     if(n.label.depend) {
    //       arr[index] = {...n};
    //       arr[index].children = [];
    //       if(n.children && n.children.length > 0) {
    //         this.dependNode(n.children, arr[index].children);
    //       }
    //       index++;
    //     }
    //   }
    //   return arr;
    // },
    
    // independNode(node, arr) {
    //   let index = 0;
    //   for(let n of node) {
    //     if(!n.label.depend && (!n.children || !n.children.length)) {
    //       arr[index] = {...n};
    //       // arr[index].children = [];
    //       // if(n.children && n.children.length >= 0) {
    //       //   this.independNode(n.children, arr[index].children);
    //       // }
    //       index++;
    //     }
    //   }
    //   return arr;
    // },
    // remove(node, data) {
    //   this.$confirm('This will remove this node. Continue?', 'Warning', {
    //       confirmButtonText: 'OK',
    //       cancelButtonText: 'Cancel',
    //       type: 'warning'
    //     }).then(() => {
    //       const parent = node.parent;
    //       const children = parent.data.children || parent.data;
    //       // const index = children.findIndex(d => d.id === data.id);
    //       const index = node.id - 1;
    //       // children.splice(node.id, 1);
    //       this.employees.splice(index, 1);
    //       // const index = children.indexOf(node)
    //       console.log(children, index)
    //       this.$message({
    //         type: 'success',
    //         message: 'Remove completed'
    //       });
    //     }).catch(() => {
    //       this.$message({
    //         type: 'info',
    //         message: 'Remove canceled'
    //       });          
    //     });
    // },
    // addToChart(node, data) {
    //   node.label.depend = true;
    // },
  },
  
  computed: {
    // dependEmp() {
    //   const arr = [];
    //   this.dependNode(this.employees, arr);
    //   return arr;
    // },
    // independEmp() {
    //   const arr = [];
    //   this.independNode(this.employees, arr);
    //   return arr;
    // }
  }
};
</script>
<style  lang='scss'>
.org-chart {
  .side-bar {
    height: 100vh;
    .el-tree-node {
		  .el-tree-node__content {
				display: contents;
        .el-tree-node__expand-icon {
          display: none;
        }
			}
      .custom-tree-node {
        margin: 0;
        padding: 15px 0 0 0;
        position: relative;
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0);
          transition: background 0.5s ease;
        }
        &:hover .overlay {
          display: block;
          background: rgba(0, 0, 0, .5);
        }
        .add-to-chart {
          position: absolute;
          opacity: 0;
          left: -50%;
          color: #fff;
          font-size: 1.5em;
          padding: 10px;
          border: 2px solid #fff;
          border-radius: 50%;
          font-weight: bold;

        }
        &:hover .add-to-chart {
          opacity: 1;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          transition: all 0.3s ease;
        }
      }
	}
  }
  
}
.el-menu-vertical-demo {
  overflow: auto;
  width: 0;
}
.bthr-text-green {
  color: #1ed292;
}
.org_tree {
  width:100%;
  overflow-x: scroll;
  .el-tree-node,
  .el-tree-node__children {
    position: relative;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .el-tree-node {
    display: table-cell;
    position: relative;
    padding-top: 20px;
  }

  > .el-tree-node {
    padding: 20px 5px;
  }

  .el-tree-node:after {
    left: 50% !important;
    border-left: 1px solid #ddd;
  }

  .el-tree-node__children {
    display: table;
    position: relative;
    padding: 20px 0;
  }

  .el-tree-node.is-expanded > .el-tree-node__children {
    display: table;
  }

  .el-tree-node__children {
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

  .el-tree-node {
    &:after,
    &:before {
      transition: all 0.7s;
    }
  }

  .el-tree-node__children {
    &:after,
    &:before {
      transition: all 0.7s;
    }
  }

  .el-tree-node {
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

  > .el-tree-node {
    &:after {
      border-left: 0;
      border-top: 0 !important;
    }

    &:before {
      border: 0;
      border-top: 0;
    }
  }

  .el-tree-node__content {
    padding: 10px !important;
    margin: 0 5px;
    display: inline-flex;
    width: 300px;
    flex-flow: column-reverse;
    border: 1px solid #ddd;
    height: auto;
    border-radius: 3px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
    > .el-tree-node__expand-icon {
      border-radius: 50%;
    }

    &:hover > {
      .el-tree-node__expand-icon {
        background: #fff;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
      }

      .is-leaf.el-tree-node__expand-icon {
        visibility: hidden;
      }
    }
    .tree-icon {
      font-size: 1em;
      padding: 5px;
      border: 1px solid #606266;
      border-radius: 50%;
      margin-right: 5px;
      font-weight: normal;
      outline: none;
    }
  }
}
// org tree
// independent employee list

.custom-tree-node {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
}

.smooth-move {
  opacity: 0;
  transition: transform 0.5s;
}

.el-avatar {
  width: 70px;
  height: 70px;
  line-height: 70px;
}

.avatar-name {
  white-space: normal;
  font-weight: bold;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 320px;
  min-height: 400px;
}
</style>