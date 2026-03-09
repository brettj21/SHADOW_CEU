<?php if($settings['style'] == 'style-1'): ?>
   <div class="service-item <?php echo esc_attr($settings['style']) ?>">
      <div class="service-item-content">
			
			<?php if (!empty($item['image']['url'])) : ?>
				<div class="image-content">
					<img src="<?php echo esc_url($item['image']['url']) ?>" alt="<?php esc_html($item['title']) ?>" />
				</div>
			<?php endif; ?>

			<div class="service-content">
				<?php if($item['title']){ ?>
					<h3 class="title"><span><?php echo $item['title'] ?></span></h3>
				<?php } ?>

				<?php if($item['desc']){ ?>
					<div class="desc"><?php echo $item['desc'] ?></div>
				<?php } ?>

				<?php if($item['link']['url']){ ?>
					<div class="read-more">
						<?php echo $this->gva_render_link_html(esc_html__('Read more', 'zilom'), $item['link'], 'btn-inline' ) ?>
					</div>
				<?php } ?>
			</div>
				
		</div>
		<?php echo $this->gva_render_link_overlay($item['link']) ?>
	</div>		
<?php endif; ?>	

