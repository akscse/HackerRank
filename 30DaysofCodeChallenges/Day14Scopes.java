	// Add your code here
	Difference(int [] a){
	    this.elements = a;
	    this.maximumDifference = 0;
	}
	
	void computeDifference (){
		int len = this.elements.length;
		Arrays.sort(this.elements);
		this.maximumDifference = this.elements[len-1] - this.elements[0];
		return;
	}