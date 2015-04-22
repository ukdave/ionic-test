package com.myApp;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

import org.junit.Before;
import org.junit.Test;

public class AppTests {
	
	private App app;

	@Before
	public void setup() {
		this.app = new App();
	}

	@Test
	public void testGetGreeting() {
		assertThat(app.getGreeting(), is("Hello"));
	}

	@Test
	public void testAdd() {
		assertThat(app.add(1, 2), is(3));
	}
}
