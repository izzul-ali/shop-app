<script>
	import { slide, fly } from 'svelte/transition';

	let sidebarOpen = false;
	let openMessage = false;
</script>

<nav class="p-5">
	<div class="flex items-center justify-between">
		<!-- Sidebar start -->
		{#if sidebarOpen}
			<div
				in:fly={{ x: -50, duration: 500 }}
				class=" fixed left-0 right-20 bottom-0 top-0 h-100% bg-gradient-to-br from-blue-600 to-blue-500 p-5 text-white"
			>
				<div
					class="absolute right-5"
					on:click={() => {
						sidebarOpen = false;
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="currentColor"
						class="bi bi-x-lg"
						viewBox="0 0 16 16"
					>
						<path
							d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
						/>
					</svg>
				</div>

				<h1 class="mb-10 mt-14 text-2xl font-bold">ShoppingTime</h1>

				<div class="mt-4 flex items-center border border-blue-300 rounded-lg p-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						fill="currentColor"
						class="bi bi-search"
						viewBox="0 0 16 16"
					>
						<path
							d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
						/>
					</svg>
					<input
						class="w-full bg-inherit text-sm px-3 focus:outline-none"
						type="search"
						name="search"
						id="search"
						placeholder="search"
					/>
				</div>

				<!-- Home -->
				<a
					href="/"
					on:click={() => {
						sidebarOpen = false;
					}}
				>
					<div class="flex items-center space-x-3 mt-10">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							fill="currentColor"
							class="bi bi-house-door-fill"
							viewBox="0 0 16 16"
						>
							<path
								d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"
							/>
						</svg>
						<h1 class="text-base">Home</h1>
					</div>
				</a>

				<!-- Profile -->
				<div class="flex items-center space-x-3 mt-5">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						fill="currentColor"
						class="bi bi-file-person-fill"
						viewBox="0 0 16 16"
					>
						<path
							d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11z"
						/>
					</svg>
					<h1 class="text-base">Profile</h1>
				</div>

				<!-- Cart -->
				<div class="flex items-center space-x-3 mt-5">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						fill="currentColor"
						class="bi bi-cart-fill"
						viewBox="0 0 16 16"
					>
						<path
							d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
						/>
					</svg>
					<h1 class="text-base">Cart</h1>
				</div>

				<hr class="my-12 opacity-60" />

				<!-- Message -->
				<div class="">
					<div class="flex items-center space-x-3 mt-5 justify-between">
						<div class="flex items-center space-x-3">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="currentColor"
								class="bi bi-chat-left-text-fill"
								viewBox="0 0 16 16"
							>
								<path
									d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"
								/>
							</svg>

							<h1 class="text-base">Message</h1>
						</div>
						<div
							class="p-2"
							on:click={() => {
								openMessage = !openMessage;
							}}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="12"
								height="12"
								fill="currentColor"
								class="bi bi-caret-down-fill"
								viewBox="0 0 16 16"
							>
								<path
									d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
								/>
							</svg>
						</div>
					</div>
					{#if openMessage}
						<div transition:slide={{ duration: 100 }} class="text-gray-100 px-3 text-sm">
							<h1 class="my-2 hover:text-gray-300">Business</h1>
							<h1 class="my-2 hover:text-gray-300">Personal</h1>
							<h1 class="my-2 hover:text-gray-300">Friends</h1>
						</div>
					{/if}
				</div>

				<!-- Contact -->
				<a href="https://github.com/izzul-ali/shop-app">
					<div class="flex items-center space-x-2 absolute bottom-5 text-sm w-fit p-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-github"
							viewBox="0 0 16 16"
							color="black"
						>
							<path
								d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							/>
						</svg>

						<h1>Github</h1>
					</div>
				</a>
			</div>
		{/if}
		<!-- Sidebar end -->

		<!-- Navbar start -->
		<div
			class=""
			on:click={() => {
				sidebarOpen = !sidebarOpen;
			}}
		>
			<span class="block w-5 h-[3px] rounded-lg my-1 bg-slate-500" />
			<span class="block w-5 h-[3px] rounded-lg my-1 bg-slate-500" />
			<span class="block w-5 h-[3px] rounded-lg my-1 bg-slate-500" />
		</div>
		<div class="flex space-x-3">
			<a on:click={() => {sidebarOpen = true}} href="#search">
				<svg
				xmlns="http://www.w3.org/2000/svg"
				width="18"
				height="18"
				fill="currentColor"
				class="bi bi-search"
				viewBox="0 0 16 16"
			>
				<path
					d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
				/>
			</svg>
			</a>

			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="18"
				height="18"
				fill="currentColor"
				class="bi bi-bell"
				viewBox="0 0 16 16"
			>
				<path
					d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"
				/>
			</svg>
		</div>
		<!-- Navbar end -->
	</div>
</nav>
