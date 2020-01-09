<template>
	<div class="row">
		<div class="col-12">
			<div class="floatsidebar">
				<div style="z-index: 20;">
					<el-button @click="isCollapse = !(isCollapse)" class="side-collapse-btn" size="small">
						<i :class="[isCollapse == true ? 'el-icon-arrow-right' : 'el-icon-arrow-left']"></i>
					</el-button>
				</div>
				<el-menu default-active="1" class="el-menu-vertical-demo border-top shadow" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
					<el-submenu index="1">
						<template slot="title">
							<!-- <i class="el-icon-location"></i> -->
							<span slot="title">No Manager</span>
						</template>
						<el-menu-item-group>
							<draggable ghost-class="ghost" class="list-group" :list="list1" :group="{ name: 'people', put: false }" @change="log">
								<transition-group type="transition" name="flip-list">
									<li v-for="emp in list1" :key="emp.name" class="list-group-item">
										<div class="row">
											<div class="col-4 pl-0">
												<el-avatar :src="emp.avatar"></el-avatar>
											</div>
											<div class="col-8 p-0 text-left text-capitalize">
												<h6 class="avatar-name">{{ emp.name }}</h6>
												<h6>{{ emp.position }}</h6>
											</div>
										</div>
									</li>
								</transition-group>
							</draggable>
						</el-menu-item-group>
					</el-submenu>
				</el-menu>
			</div>
			
			<template>
				<!-- <panZoom :options="{minZoom: 0.4, maxZoom: 1, pinchSpeed: 1, smoothScroll: false}"> -->
					<department class="dep_tree" :tasks="departments"/>
				<!-- </panZoom> -->
			</template>
		</div>
		<pre class="text-left">{{ departments | json }}</pre>
		<!-- <rawDisplayer class="col-3" :value="list3" title="List" /> -->
	</div>
</template>

<script>
import draggable from "vuedraggable";
import department from './Department'
export default {
	name: "nested-example",
	display: "Nested",
	order: 15,
	components: {
		draggable,
		department,
	},
	methods: {
		add: function() {
			this.list.push({ name: "Juan" });
		},
		replace: function() {
			this.list = [{ name: "Edgard" }];
		},
		clone: function(el) {
			return {
			name: el.name + " cloned"
			};
		},
		log: function(evt) {
			window.console.log(evt);
		}
	},
	data() {
		return {
			activeName: "1",
			isCollapse: false,
			list1: [
				{ 
					name: "Fergie",
					company: "Better Hr",
					position: "position",
					avatar: "https://api.adorable.io/avatars/285/abott@adorable.png",
					show: true,
					children: [] 
				},
				{ 
					name: "John",
					company: "Better Hr",
					position: "position",
					avatar: "https://api.adorable.io/avatars/285/abott@adorable.png",
					show: true,
					children: [] 
				},
				{ 
					name: "Jessie",
					company: "Better Hr",
					position: "position",
					avatar: "https://api.adorable.io/avatars/285/abott@adorable.png",
					show: true,
					children: [] 
				},
				{ 
					name: "Molly",
					company: "Better Hr",
					position: "position",
					avatar: "https://api.adorable.io/avatars/285/abott@adorable.png",
					show: true,
					children: [] 
				},
				{ 
					name: "Frank",
					company: "Better Hr",
					position: "position",
					avatar: "https://api.adorable.io/avatars/285/abott@adorable.png",
					show: true,
					children: [] 
				},
				{ 
					name: "Henry",
					company: "Better Hr",
					position: "position",
					avatar: "https://api.adorable.io/avatars/285/abott@adorable.png",
					show: true,
					children: [] 
				},
			],
			
			departments: [
				{
					name: "Department 1",
					avatar: "https://api.adorable.io/avatars/285/abott@adorable.png",
					show: true,
					employees: [
						{ 
							name: "Fergie",
							company: "Better Hr",
							position: "position",
							avatar: "https://api.adorable.io/avatars/285/abott@adorable.png",
							show: true,
							children: [] 
						},
						{ 
							name: "John",
							company: "Better Hr",
							position: "position",
							avatar: "https://api.adorable.io/avatars/285/abott@adorable.png",
							show: true,
							children: [] 
						},
						{ 
							name: "Jessie",
							company: "Better Hr",
							position: "position",
							avatar: "https://api.adorable.io/avatars/285/abott@adorable.png",
							show: true,
							children: [] 
						},
						{ 
							name: "Molly",
							company: "Better Hr",
							position: "position",
							avatar: "https://api.adorable.io/avatars/285/abott@adorable.png",
							show: true,
							children: [] 
						},
						{ 
							name: "Frank",
							company: "Better Hr",
							position: "position",
							avatar: "https://api.adorable.io/avatars/285/abott@adorable.png",
							show: true,
							children: [] 
						},
					],
					children: [
						{
						name: "Department 2",
						avatar: "https://api.adorable.io/avatars/285/abott@adorable.png",
						show: true,
						employees: [],
						children: [
							{
								name: "Department 3",
								avatar: "https://api.adorable.io/avatars/285/abott@adorable.png",
								show: true,
								employees: [],
								children: []
							}
						]
						},
						{
							name: "Department 10",
							avatar: "https://api.adorable.io/avatars/285/abott@adorable.png",
							show: true,
							employees: [],
							children: [
							]
						}
					]
				},
				{
					name: "Department 4",
					avatar: "https://api.adorable.io/avatars/285/abott@adorable.png",
					show: true,
					employees: [
						{ 
							name: "Fergie",
							company: "Better Hr",
							position: "position",
							avatar: "https://api.adorable.io/avatars/285/abott@adorable.png",
							show: true,
							children: [] 
						},
						{ 
							name: "John",
							company: "Better Hr",
							position: "position",
							avatar: "https://api.adorable.io/avatars/285/abott@adorable.png",
							show: true,
							children: [] 
						},
						{ 
							name: "Jessie",
							company: "Better Hr",
							position: "position",
							avatar: "https://api.adorable.io/avatars/285/abott@adorable.png",
							show: true,
							children: [] 
						},
						{ 
							name: "Molly",
							company: "Better Hr",
							position: "position",
							avatar: "https://api.adorable.io/avatars/285/abott@adorable.png",
							show: true,
							children: [] 
						},
						{ 
							name: "Frank",
							company: "Better Hr",
							position: "position",
							avatar: "https://api.adorable.io/avatars/285/abott@adorable.png",
							show: true,
							children: [] 
						},
					],
					children: [
						{
						name: "Department 5",
						avatar: "https://api.adorable.io/avatars/285/abott@adorable.png",
						show: true,
						employees: [],
						children: [
							{
								name: "Department 6",
								avatar: "https://api.adorable.io/avatars/285/abott@adorable.png",
								show: true,
								employees: [],
								children: []
							}
						]
						}
					]
				},
				{
					name: "Department 7",
					avatar: "https://api.adorable.io/avatars/285/abott@adorable.png",
					show: true,
					employees: [
						{ 
							name: "Fergie",
							company: "Better Hr",
							position: "position",
							avatar: "https://api.adorable.io/avatars/285/abott@adorable.png",
							show: true,
							children: [] 
						},
						{ 
							name: "Molly",
							company: "Better Hr",
							position: "position",
							avatar: "https://api.adorable.io/avatars/285/abott@adorable.png",
							show: true,
							children: [] 
						},
						{ 
							name: "Frank",
							company: "Better Hr",
							position: "position",
							avatar: "https://api.adorable.io/avatars/285/abott@adorable.png",
							show: true,
							children: [] 
						},
					],
					children: []
				}
			],
		};
	},
	
};
</script>
<style lang="scss" scoped>
	.flip-list-move {
		transition: transform 0.5s;
	}
	.no-move {
		transition: transform 0s;
	}
	.ghost {
		opacity: 0.5;
		background: #c8ebfb;
	}
	.floatsidebar {
		position: fixed;
		left: 0;
		top: 0;
		z-index: 20;
		display: flex;
		flex-flow: row-reverse;
		height: 100%;
		.side-collapse-btn {
			outline: none;
			margin-left: -5px;
			height: 50px;
			width: 40px;
		}
		.el-menu--collapse {
			width: 7px;
			z-index: 20;
		}
		.list-group-item {
			border-radius: 0;
		}
	}
</style>