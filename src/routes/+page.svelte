<script lang="ts">
	import { space } from 'postcss/lib/list';

	let nameA = '';
	let nameB = '';
	let result: number;

	const countOccurence = (arrayOfString) => {
		let array = [];
		while (arrayOfString.length) {
			let char = arrayOfString[0];
			array.push(arrayOfString.filter((e) => e == char).length);
			arrayOfString = arrayOfString.filter((e) => e != char);
		}

		return array;
	};

	const lastDigitOnly = (array: Array<number>) => {
		array = array.map((e) => {
			return e % 10;
		});

		return array;
	};

	const handleClick = (male: String, female: String) => {
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

		console.log(parseInt(charOccurence.join('')));
		return (result = parseInt(charOccurence.join('')));
	};
</script>

<div class="grid h-screen w-screen place-items-center">
	<div
		class="grid grid-cols-1 gap-4 border-2 border-sea-pink-500 bg-gradient-to-br p-12 text-center font-serif"
	>
		<label for="your-name" class="text-2xl font-extrabold">Nama Kamu</label>
		<label for="your-partner-name" class="text-2xl font-extrabold">Nama Pasanganmu</label>
		<input
			bind:value={nameA}
			id="your-name"
			type="text"
			class="rounded border-2 border-sea-pink-500 font-medium"
			placeholder="Contoh: Hendra"
		/>
		<input
			bind:value={nameB}
			id="your-partner-name"
			type="text"
			class="rounded border-2 border-sea-pink-500 font-medium"
			placeholder="Contoh: Selly"
		/>
		<button
			on:click={() => handleClick(nameA, nameB)}
			class="col-span-2 bg-sea-pink-500 p-2 text-white"
		>
			Hitung
		</button>

		<div class="col-span-2 grid place-items-center">
			{#if result}
				<div class="aspect-square rounded-[100%] bg-sea-pink-500 p-8 text-center font-extrabold">
					{result}%
				</div>
			{/if}
		</div>
	</div>
</div>
