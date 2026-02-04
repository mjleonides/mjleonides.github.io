<template>
	<div>
		<div class="container">
			<header><HeaderIcons /></header>
			<div class="intro-container">
				<div class="intro-section">
					<img
						class="avi"
						width="200"
						src="~/assets/images/avi.jpeg"
						alt="Head shot of Mike Leonides smiling in front of greenery. He is quite attractive." />
					<h1>
						I'm Mike, and I like to build things that make my life easier.
						Hopefully, they can help you too.
					</h1>
					<p>
						<a href="mailto:contact@leonides.dev">Click here to contact me.</a>
						Check out some of my web-based tools at
						<a href="https://leonides.dev/font-sizer" target="_blank"
							>Font Sizer</a
						>,
						<a href="https://leonides.dev/unit-pricer" target="_blank"
							>Unit Pricer</a
						>, and
						<a href="https://leonides.dev/verse-typer" target="_blank"
							>Verse Typer</a
						>.
					</p>
					<ResumeNotice v-if="!resumeLoading" />
				</div>
			</div>

			<EntryList v-if="entries" :entries="entries" />
		</div>
	</div>

	<footer>
		<p>
			Crafted by <a href="https://leonides.dev" target="_blank">leonides.dev</a>
		</p>
	</footer>
</template>

<script setup lang="ts">
import useGetResumeData from "@/assets/queries/useGetResumeData";

const entries = ref();
const resumeLoading = ref(true);

const mailUrl = "mailto:contact@leonides.dev";

onMounted(async () => {
	//have to use async await on the useGetResume composable or else it tries to set values before the api call is done
	// get events from mock db when component is created
	const { data, isLoading, error } = await useGetResumeData();
	// data, isLoading, and error from useGetResumeData() are now available in this component. These are not new variables but the same ones from
	// the function. However they are refs. So to access the original value of the error for example, methods need to be called on error.value.methodName()
	if (error.value != undefined) {
		console.log("Get resume failed due to " + error.value);
	}
	entries.value = data.value;
	resumeLoading.value = isLoading.value;
});
</script>
<style lang="scss" scoped>
.intro-container {
	display: flex;
	flex-direction: column;
	min-height: 90vh;
	justify-content: center;
}

.intro-section {
	height: 400px;
}

h1 {
	margin-top: 1rem;
	font-size: 1.5rem;
}

.actions-container {
	display: inline-flex;
	align-items: center;
	gap: 1ch;

	@media (max-width: 500px) {
		flex-direction: column;
		align-items: flex-start;
	}
}

.avi {
	max-width: 40vw;
	border-radius: 8px;
}

footer {
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 0.75rem;
}
</style>
