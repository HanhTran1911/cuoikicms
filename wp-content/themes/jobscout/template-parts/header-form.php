<?php

/**
 *
 * Creating a custom job search form for homepage
 * The [jobs] shortcode is will use search_location and search_keywords variables from the query string.
 *
 * @link https://wpjobmanager.com/document/tutorial-creating-custom-job-search-form/
 *
 * @package JobScout
 */
$find_a_job_link = get_option('job_manager_jobs_page_id', 0);
$post_slug       = get_post_field('post_name', $find_a_job_link);
$ed_job_category = get_option('job_manager_enable_categories');

if ($post_slug) {
  $action_page =  home_url('/' . $post_slug);
} else {
  $action_page =  home_url('/');
}
?>

<div class="job_listings">

  <form class="jobscout_job_filters" method="GET" action="<?php echo esc_url($action_page) ?>">
    <div class="search_jobs">
      <div class="search_keywords" style="align-items: center;background: white;flex: 50%;">
        <label for="search_keywords"><?php esc_html_e('Keywords', 'jobscout'); ?></label>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0,0,256,256" style="fill:#ffff; margin-left: 20px;">
          <g fill="#ffb700" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
            <g transform="scale(5.12,5.12)">
              <path d="M21,3c-9.39844,0 -17,7.60156 -17,17c0,9.39844 7.60156,17 17,17c3.35547,0 6.46094,-0.98437 9.09375,-2.65625l12.28125,12.28125l4.25,-4.25l-12.125,-12.09375c2.17969,-2.85937 3.5,-6.40234 3.5,-10.28125c0,-9.39844 -7.60156,-17 -17,-17zM21,7c7.19922,0 13,5.80078 13,13c0,7.19922 -5.80078,13 -13,13c-7.19922,0 -13,-5.80078 -13,-13c0,-7.19922 5.80078,-13 13,-13z"></path>
            </g>
          </g>
        </svg>
        <input type="text" id="search_keywords" name="search_keywords" placeholder="<?php esc_attr_e('Search for jobs, companies, skills', 'jobscout'); ?>">
      </div>

      <div class="search_location" style="margin-right: 10px;flex: 25%;align-items: center;padding-left: 10px;background-color: white;">
        <img style="width: 25px;height: 25px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACKUlEQVR4nO2Wu2sUURTGf1E0qLFWsEgjYuWzVRsRkihiIf4LiuYviILgq9dOJX2y1RJ3752AuBgQFLVQi6QSieKjMJoYK9FPZubsJpjZ3dmZHYOSDw4Mc17f+ebOvRfW8K9BAcfkuCvHjByLZtPy3JHjaHGNq+yS56E8ammOmgJ2drd5hSPyzFmDj/KMKGCvJtkSWYV9clw0XxjzWY5D3Zx8ziYcU42+prFltsox3iDRDSW0JPuYRE/beNEjT8lIPMi/4LzJ3mLyJkp8stzsC1Phao+nH+k413PJcm/nITBjU+xJaHBcnnfyvFWVwRX+cGHGudPZCXgWoiIJ8keNl3692cTPEPsXshNwLEZF7rOtYwIVtpvvWx4Cz6MiSRJXGYxIOGYVMJCQO2QEn+YhcN2KjHac6xm13Gv5NiHHL3nmNcHm1HklNsnxNSIQsDszgRByTNm3PE9KyHPBcqbS5jSFqpyqLzSV2Ng2/hkb5Hlj8p8kLxRvrS+t4Nm28Z5zFvsizdadCvKcMRXetzyMavTJ88FiT6ernlYFxyMrfKVpnOOqxTzp2vR1yHPYpP2uCv0r/BX6I19MoDt3gT+x7KwvJ/jK5hunKCjeXr/Y/32i8T5gwNSZ1z12FEYghAKGbdLXjStZ+ByTGqZo6DLr5HlsJG7Kc6u+56vE+sIJhNAkB+X4Ic/PyOLnA/xNyHFj2XU8+4GTFXL0yvHKrJfVgBz7Q1uV5vwv+A1rkvGh14nNwAAAAABJRU5ErkJggg==">
        <?php
        global $wpdb;
        $table  = $wpdb->prefix . 'postmeta';
        $sql = "SELECT DISTINCT SUBSTRING_INDEX(`meta_value`,',',-1) as location FROM `wp_postmeta` WHERE `meta_key` like '%location%' ORDER BY location";
        $data = $wpdb->get_results($wpdb->prepare($sql));
        ?>

        <select id="search_location" name="search_location" value="Khu vực">
          <option value="">Khu vực</option>
          <?php foreach ($data as $value) : ?>
            <option style="padding-left: 10px;" value="<?php echo $value->location; ?>"><?php echo $value->location; ?></option>
          <?php endforeach ?>
        </select>

      </div>

      <?php if ($ed_job_category) { ?>
        <div class="search_categories custom_search_categories">
          <label for="search_category"><?php esc_html_e('Job Category', 'jobscout'); ?></label>
          <select id="search_category" class="robo-search-category" name="search_category">
            <option value=""><?php _e('Select Job Category', 'jobscout'); ?></option>
            <?php foreach (get_job_listing_categories() as $jobcat) : ?>
              <option value="<?php echo esc_attr($jobcat->term_id); ?>"><?php echo esc_html($jobcat->name); ?></option>
            <?php endforeach; ?>
          </select>
        </div>
      <?php } ?>

      <div class="search_submit">
        <input type="submit" style="flex: 15%; background-color: #ea7f33;     color: white;    font-weight: 700;    font-size: medium;" value="<?php esc_attr_e('SEARCH JOB', 'jobscout'); ?>" />
      </div>

    </div>
  </form>

</div>