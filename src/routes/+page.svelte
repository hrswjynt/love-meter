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
	<div
		class="grid grid-cols-1 gap-4 border-2 border-gray-500 bg-gradient-to-br p-12 text-center font-serif"
	>
		<label class="text-lg">Nama Kamu</label>
		<label class="text-lg">Nama Pasanganmu</label>
		<input type="text" class="rounded border-2 border-gray-500" placeholder="Contoh: Hendra" />
		<input type="text" class="rounded border-2 border-gray-500" placeholder="Contoh: Selly" />
		<button on:click={handleClick(nameA, nameB)} class="col-span-2 bg-gray-500 p-2 text-white">
			Hitung
		</button>
	</div>
</div>
