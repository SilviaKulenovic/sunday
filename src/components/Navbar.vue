<template>
  <b-navbar 
    toggleable="md"
    type="dark"
    variant="info"
    >
     <b-navbar-brand :to="{ name: 'Home' }">Home</b-navbar-brand>
    <b-navbar-nav>
      <b-nav-item-dropdown id="nav7_ddown"
      text="Forecast"
      extra-toggle-classes="nav-link-custom"
      right href="#"> 
           <b-dropdown-item>Next hours</b-dropdown-item>
           <b-dropdown-item>Next days</b-dropdown-item>
            
      </b-nav-item-dropdown>     
      <b-nav-item :to="{ name: 'Crops' }">Crops</b-nav-item>
      <b-nav-item :to="{ name: 'Notes' }">Notes</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>
<script>
export default {
  name: 'Navbar'
};
</script>