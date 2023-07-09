<script>
	let nameA = '';
	let nameB = '';
	let result;

	const countOccurence = (arrayOfString) => {
		let array = [];
		while (arrayOfString.length) {
			let char = arrayOfString[0];
			array.push(arrayOfString.filter((e) => e == char).length);
			arrayOfString = arrayOfString.filter((e) => e != char);
		}

		return array;
	};

	const lastDigitOnly = (array) => {
		array = array.map((e) => {
			return e % 10;
		});

		return array;
	};

	const handleClick = (male, female) => {
		let arrayOfString = [...(male.toLowerCase() + female.toLowerCase())].filter((e) => {
			return /^[A-Za-z]+$/.test(e);
		});
		let charOccurence = countOccurence(arrayOfString);

		while (charOccurence.length > 2) {
			let array = [];
			let numberOfLoop = Math.floor(charOccurence.length / 2);
			for (let i = 0; i < numberOfLoop; i++) {
				array.push(charOccurence[i] + charOccurence[charOccurence.length - (i + 1)]);
			}
			if (charOccurence.length % 2 != 0) array.push(charOccurence[numberOfLoop]);
			charOccurence = lastDigitOnly(array);
		}

		return (result = parseInt(charOccurence.join('')));
	};
</script>

<div class="grid h-screen w-screen place-items-center">
	<label>
		Cowok
		<input bind:value={nameA} />
	</label>

	<label>
		Cewek
		<input bind:value={nameB} />
	</label>
</div>

<button on:click={handleClick(nameA, nameB)}>Hitung</button>

<span>
	{#if result}
		{result}
	{:else}
		Tidak ada apa apa
	{/if}
</span>
